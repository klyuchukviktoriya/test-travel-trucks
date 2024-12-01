import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Booking.module.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = date => {
    setFormData(prev => ({ ...prev, bookingDate: date }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    else if (formData.name.length < 3 || formData.name.length > 50)
      newErrors.name = "Name must be between 3 and 50 characters";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.bookingDate)
      newErrors.bookingDate = "Booking date is required";
    if (formData.comment.length > 200)
      newErrors.comment = "Comment must not exceed 200 characters";
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormData({
        name: "",
        email: "",
        bookingDate: null,
        comment: "",
      });
      setModalVisible(true);
      setTimeout(() => setModalVisible(false), 8000);
    }
  };

  return (
    <div className={css.booking}>
      <h2 className={css.bookingTitle}>Book your campervan now</h2>
      <p className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          maxLength="50"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          maxLength="100"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <DatePicker
          className={css.inputDate}
          selected={formData.bookingDate}
          onChange={handleDateChange}
          placeholderText="Booking date*"
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          popperClassName="myCustomDatepickerPopper"
          shouldCloseOnSelect={false}
          popperPlacement="bottom-start"
        />
        {errors.bookingDate && (
          <p style={{ color: "red" }}>{errors.bookingDate}</p>
        )}

        <textarea
          className={css.input}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          maxLength="200"
        />
        {errors.comment && <p style={{ color: "red" }}>{errors.comment}</p>}

        <button type="submit" className={css.formButton}>
          Submit
        </button>
      </form>

      {isModalVisible && (
        <div
          className={css.modal}
          onClick={e => {
            if (e.target === e.currentTarget) {
              setModalVisible(false);
            }
          }}
        >
          <div className={css.modalContent}>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXljeHpocjF2dWI5Zmc1MWNtNTB2NWlscmpidHdpY2ZpMm9qcjJ1YyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/R6gvnAxj2ISzJdbA63/giphy.gif"
              alt="Success"
              className={css.modalGif}
            />
            <h3>Thank you!</h3>
            <p>
              We have received your booking request and will contact you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
