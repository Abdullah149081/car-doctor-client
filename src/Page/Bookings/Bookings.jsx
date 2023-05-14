/* eslint-disable no-underscore-dangle */
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import ServiceBanner from "../shared/ServiceBanner/ServiceBanner";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const URL = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [URL]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-warning ml-2",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/booking/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire("Deleted!", "Your Product has been deleted.", "success");
                setTimeout(() => {
                  const newBooking = booking.filter((book) => book._id !== id);
                  setBooking(newBooking);
                }, 1000);
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled", "Your imaginary Product is safe :)", "error");
        }
      });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Confirm");
          const remaining = booking.filter((book) => book._id !== id);
          const updatedBooking = booking.find((book) => book._id === id);
          updatedBooking.status = "confirm";
          const newBooking = [updatedBooking, ...remaining];
          setBooking(newBooking);
        }
      });
  };

  return (
    <div className="car-container lg:py-10">
      <ServiceBanner>
        <span>Cart Details</span>
        <span>Home-Product Details</span>
      </ServiceBanner>
      <div className="mt-10">
        {booking.map((book) => (
          <div key={book._id} className="overflow-x-auto w-full text-accent font-bold">
            <table className="table w-full">
              <tbody>
                <tr>
                  <th>
                    <label>
                      <button onClick={() => handleDelete(book._id)} type="button" className="btn btn-accent rounded-full">
                        x
                      </button>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask rounded-xl h-60">
                          <img src={book.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{book.serviceName}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>$ {book.price}</td>
                  <td>{book.email}</td>
                  <td>
                    <span className="badge badge-ghost">{book.date}</span>
                  </td>
                  <th>
                    {book.status === "confirm" ? (
                      <span className="text-primary">Confirm Order</span>
                    ) : (
                      <button onClick={() => handleConfirm(book._id)} type="button" className="btn btn-primary">
                        Please Confirm
                      </button>
                    )}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
