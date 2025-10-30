import { useDatePicker } from "./hooks/useDatePicker";
import { useState } from "react";

export function DatePickerPanel({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const {
        open,
        panelRef,
        triggerRef,
        selectedDate,
        setSelectedDate,
        setOpen,
    } = useDatePicker();
    const [currentMonth, setCurrentMonth] = useState(
        selectedDate || new Date()
    );

    if (!open) return null;

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const handleDateClick = (day: number) => {
        const newDate = new Date(year, month, day);
        setSelectedDate(newDate);
        setOpen(false);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(year, month + 1, 1));
    };

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    if (children) {
        return (
            <div
                {...props}
                style={{ ...props.style, position: "absolute" }}
                ref={panelRef}
                role="dialog"
                aria-modal="false"
                aria-labelledby={triggerRef.current?.id}
                tabIndex={-1}
                data-slot="datepicker-panel"
            >
                {children}
            </div>
        );
    }

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptySlots = Array.from({ length: firstDay }, (_, i) => i);

    const today = new Date();
    const isToday = (day: number) =>
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;

    return (
        <div
            {...props}
            style={{
                position: "absolute",
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                minWidth: "280px",
                zIndex: 50,
                ...props.style,
            }}
            ref={panelRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby={triggerRef.current?.id}
            tabIndex={-1}
            data-slot="datepicker-panel"
        >
            <div
                data-slot="calendar-header"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                }}
            >
                <button
                    onClick={handlePrevMonth}
                    type="button"
                    aria-label="Previous month"
                    style={{
                        padding: "0.25rem 0.5rem",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        fontSize: "1.25rem",
                        color: "#6b7280",
                        borderRadius: "4px",
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#f3f4f6")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = "transparent")
                    }
                >
                    ←
                </button>
                <span
                    style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#111827",
                    }}
                >
                    {monthNames[month]} {year}
                </span>
                <button
                    onClick={handleNextMonth}
                    type="button"
                    aria-label="Next month"
                    style={{
                        padding: "0.25rem 0.5rem",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        fontSize: "1.25rem",
                        color: "#6b7280",
                        borderRadius: "4px",
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#f3f4f6")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = "transparent")
                    }
                >
                    →
                </button>
            </div>
            <div data-slot="calendar-grid">
                <div
                    data-slot="weekday-labels"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        gap: "0.25rem",
                        marginBottom: "0.5rem",
                    }}
                >
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <span
                            key={day}
                            style={{
                                textAlign: "center",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                color: "#6b7280",
                                padding: "0.25rem",
                            }}
                        >
                            {day}
                        </span>
                    ))}
                </div>
                <div
                    data-slot="calendar-days"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        gap: "0.125rem",
                    }}
                >
                    {emptySlots.map((i) => (
                        <span
                            key={`empty-${i}`}
                            style={{ padding: "0.5rem" }}
                        />
                    ))}
                    {days.map((day) => {
                        const isSelected =
                            selectedDate &&
                            selectedDate.getDate() === day &&
                            selectedDate.getMonth() === month &&
                            selectedDate.getFullYear() === year;
                        const isTodayDate = isToday(day);

                        return (
                            <button
                                key={day}
                                type="button"
                                onClick={() => handleDateClick(day)}
                                data-selected={isSelected}
                                aria-label={`${monthNames[month]} ${day}, ${year}`}
                                style={{
                                    padding: "0.5rem",
                                    border: "none",
                                    background: isSelected
                                        ? "#3b82f6"
                                        : "transparent",
                                    color: isSelected
                                        ? "white"
                                        : isTodayDate
                                        ? "#3b82f6"
                                        : "#111827",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    fontWeight: isTodayDate ? 600 : 400,
                                    transition: "all 0.15s",
                                }}
                                onMouseOver={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.background =
                                            "#f3f4f6";
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.background =
                                            "transparent";
                                    }
                                }}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
