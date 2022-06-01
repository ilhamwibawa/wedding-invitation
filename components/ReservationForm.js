import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSWR from "swr";
import { useRouter } from "next/router";
import moment from "moment";

const ReservationForm = ({ params }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [guests, setGuests] = useState([]);

  const router = useRouter();
  const { to } = router.query;

  const formik = useFormik({
    initialValues: {
      name: "",
      isAttending: true,
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      isAttending: Yup.boolean().required("Required"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      const data = {
        name: values.name,
        isAttending:
          values.isAttending === "true" || values.isAttending === true
            ? true
            : false,
        message: values.message,
      };

      fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        setIsSuccess(true);

        // add id to data
        const newData = {
          ...data,
          id: Math.random().toString(36).substr(2, 9),
          updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        // add data to guests
        setGuests((prev) => [newData, ...prev]);
      });

      formik.resetForm();
    },
  });

  const { data, error } = useSWR("/api/reservation", (url) =>
    fetch(url).then((r) => r.json())
  );

  useEffect(() => {
    if (data) {
      setGuests(data);
    }
  }, [data]);

  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <>
      <ul
        role="list"
        className="divide-y divide-[rgba(255,255,255,0.5)] max-h-[300px] overflow-y-scroll mb-10 border-[rgba(255,255,255,0.5)] border-[1px] p-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-black"
      >
        {guests.map((guest) => (
          <li key={guest.id} className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-xl mb-2 font-medium truncate text-white">
                  {guest.name}
                </p>
                <p className="text-sm text-white">{guest.message}</p>
                <p className="text-[10px] text-gray-600 mt-2">
                  {moment(guest.updatedAt).format("DD-MM-YYYY")}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold">
                {guest.isAttending ? (
                  <span className="bg-green-500 p-2 rounded-full text-sm text-white leading-none">
                    Hadir
                  </span>
                ) : (
                  <span className="bg-red-500 p-2 rounded-full text-sm text-white leading-none">
                    Tidak hadir
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* alert */}
      {isSuccess && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mb-5"
          role="alert"
        >
          <strong className="font-bold">
            {" "}
            Thank you for your reservation!{" "}
          </strong>
        </div>
      )}

      <form className="flex flex-col space-y-5" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className=" form-input text-black  rounded-md border-none"
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* is attending field select */}
        <div className="flex flex-col ">
          <label htmlFor="isAttending">Apakah Anda akan hadir?</label>
          <select
            id="isAttending"
            name="isAttending"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isAttending}
            className="form-select text-black  rounded-md border-none"
          >
            <option value={true}>Ya</option>
            <option value={false}>Tidak</option>
          </select>

          {formik.touched.isAttending && formik.errors.isAttending ? (
            <div>{formik.errors.isAttending}</div>
          ) : null}
        </div>

        {/* message field */}
        <div className="flex flex-col">
          <label htmlFor="message">Wishes</label>
          <textarea
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="form-textarea text-black rounded-md border-none"
          />
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
        </div>

        <div>
          <button
            className="bg-white p-3 mt-5 text-black inline-block items-center justify-center transition-all hover:border-white border-[1px] border-transparent cursor-pointer"
            disabled={formik.isSubmitting ? true : false}
            type="submit"
          >
            {formik.isSubmitting ? "Submitting..." : "SEND WISH"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ReservationForm;
