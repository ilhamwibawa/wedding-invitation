import React from "react";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <div>
      <div className="container mx-auto my-16">
        <div className="text-center max-w-md mx-auto mb-10">
          <h1 className="font-heading text-4xl text-center mb-10">RSVP</h1>
          <p className="px-5">
            Bantu kami mempersiapkan jamuan yang hangat untuk Anda semua dengan
            mengirimkan konfirmasi kehadiran melalui form berikut
          </p>
        </div>
        <div className=" xl:w-1/2 px-5 mx-auto">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
