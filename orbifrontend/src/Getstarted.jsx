import React, { useState } from "react";
import "./styles/getstarted.css";

function GetStarted() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return 'No date selected';
    
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return selectedDate.toLocaleDateString('en-US', options);
  };

  const handleSubmit = () => {
    if (!selectedDate) {
      alert('Please select a date first!');
      return;
    }

    const submissionData = {
      selectedDate: selectedDate.toISOString(),
      formattedDate: formatSelectedDate()
    };

    console.log('Date that was submitted:', submissionData);
    
    //TODO add backend route here for the data to be called here reference the entire backend route including the local host as well.  
    // You can add your API call here
    alert(`Date submitted: ${formatSelectedDate()}`);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`calendar-day ${isToday(day) ? 'today' : ''} ${isSelected(day) ? 'selected' : ''}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <h1 className="calendar-title">Pick your date!</h1>
          
          <div className="calendar">
            {/* Calendar Header */}
            <div className="calendar-header">
              <button 
                onClick={() => navigateMonth(-1)}
                className="nav-button"
              >
                &#8249;
              </button>
              
              <h2 className="month-year">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              
              <button 
                onClick={() => navigateMonth(1)}
                className="nav-button"
              >
                &#8250;
              </button>
            </div>

            {/* Days of week header */}
            <div className="days-header">
              {daysOfWeek.map(day => (
                <div key={day} className="day-header">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="calendar-grid">
              {renderCalendarDays()}
            </div>

            {/* Selected date display */}
            <div className="selected-date-info">
              <p className="selected-label">Selected Date:</p>
              <p className="selected-value">{formatSelectedDate()}</p>
            </div>

            {/* Submit button */}
            <button 
              onClick={handleSubmit}
              className="submit-button"
              disabled={!selectedDate}
            >
              Submit Date
            </button>

            {/* Legend */}
            <div className="legend">
              <div className="legend-item">
                <div className="legend-color today-color"></div>
                <span>Today</span>
              </div>
              <div className="legend-item">
                <div className="legend-color selected-color"></div>
                <span>Selected</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="userEntryinformation"> 
        <form> 

        </form>
      </div>
    </>
  );
}

export default GetStarted;