import { useState, useEffect } from "react";
import MultiSteps from "./MultiSteps";

function Availibility({ formData, setFormData, nextStep, prevStep }) {
  // Initialize availability for each day
  const [availability, setAvailability] = useState([
    { day: "Monday", enabled: false, slots: [{ from: "", to: "" }] },
    { day: "Tuesday", enabled: false, slots: [{ from: "", to: "" }] },
    { day: "Wednesday", enabled: false, slots: [{ from: "", to: "" }] },
    { day: "Thursday", enabled: false, slots: [{ from: "", to: "" }] },
    { day: "Friday", enabled: false, slots: [{ from: "", to: "" }] },
    { day: "Saturday", enabled: false, slots: [{ from: "", to: "" }] },
    { day: "Sunday", enabled: false, slots: [{ from: "", to: "" }] },
  ]);

  // Sync availability to parent formData
  useEffect(() => {
    setFormData(prev => ({ ...prev, availability }));
  }, [availability, setFormData]);

  // Toggle a day's enabled/disabled state
  const toggleDay = (index) => {
    setAvailability(prev =>
      prev.map((dayItem, i) =>
        i === index
          ? { ...dayItem, enabled: !dayItem.enabled }
          : dayItem
      )
    );
  };

  // Update a slot's time
  const updateSlot = (dayIndex, slotIndex, field, value) => {
    setAvailability(prev =>
      prev.map((dayItem, i) =>
        i === dayIndex
          ? {
              ...dayItem,
              slots: dayItem.slots.map((slot, j) =>
                j === slotIndex ? { ...slot, [field]: value } : slot
              ),
            }
          : dayItem
      )
    );
  };

  // Add a new time slot for a day
  const addSlot = (dayIndex, e) => {
    e.preventDefault();
    setAvailability(prev =>
      prev.map((dayItem, i) =>
        i === dayIndex
          ? { ...dayItem, slots: [...dayItem.slots, { from: "", to: "" }] }
          : dayItem
      )
    );
  };

  const Previousclick = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Nextclick = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="availibility page">
      <MultiSteps />
      <div className="tutor-form">
        <form
          className="container w-50 bg-white"
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Set your availability</h6>
          <p>
            Choose your working days and set your time slots. You can add
            multiple slots per day.
          </p>

          {/* Timezone */}
          <div className="mb-3">
            <label className="form-label">Timezone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your timezone"
              value={formData.timezone}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, timezone: e.target.value }))
              }
            />
          </div>

          {/* Availability for each day */}
          {availability.map((dayItem, dayIndex) => (
            <div
              key={dayItem.day}
              className={`container week d-flex flex-wrap gap-2 mb-3 ${
                dayItem.enabled ? "justify-content-end" : "justify-content-start"
              }`}
            >
              {/* Day switch */}
              <div className="form-check form-switch" style={{ width: "33%" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={dayItem.enabled}
                  onChange={() => toggleDay(dayIndex)}
                />
                <label className="form-check-label">{dayItem.day}</label>
              </div>

              {/* Time slots */}
              {dayItem.enabled ? (
                <>
                  {dayItem.slots.map((slot, slotIndex) => (
                    <div
                      key={slotIndex}
                      className="d-flex gap-2 align-items-center"
                      style={{ width: "65%" }}
                    >
                      <input
                        type="time"
                        className="form-control"
                        value={slot.from}
                        onChange={(e) =>
                          updateSlot(dayIndex, slotIndex, "from", e.target.value)
                        }
                      />
                      <span>To</span>
                      <input
                        type="time"
                        className="form-control"
                        value={slot.to}
                        onChange={(e) =>
                          updateSlot(dayIndex, slotIndex, "to", e.target.value)
                        }
                      />
                    </div>
                  ))}

                  <a
                    href="/"
                    onClick={(e) => addSlot(dayIndex, e)}
                    style={{ color: "#1A2E55", textAlign: "end", width: "100%" }}
                  >
                    + Add another slot
                  </a>
                </>
              ) : (
                <p className="text-muted">Not working day</p>
              )}
            </div>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-primary" onClick={Previousclick}>
              Back
            </button>
            <button className="btn btn-primary" onClick={Nextclick}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Availibility;
