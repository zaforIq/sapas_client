'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";

const Notes = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [showMessage, setShowMessage] = useState("");

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("note", data.noteFile[0]);
        formData.append("title", data.title);

        fetch("http://localhost:3001/api/community/note", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message) {
                    setShowMessage(data.message);
                } else {
                    setShowMessage("Failed to upload note.");
                }
            })
            .catch((error) => {
                console.error(error);
                setShowMessage("An error occurred while uploading the note.");
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{showMessage}</h2>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input {...register("title", { required: true })} type="text" />
                    {errors.title && <p>Title is required</p>}
                </div>
  
                <div>
                    <label htmlFor="noteFile">Note File:</label>
                    <input {...register("noteFile", { required: true })} type="file" />
                    {errors.noteFile && <p>Note file is required</p>}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Notes;