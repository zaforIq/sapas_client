'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";

const Questions = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [showMessage, setShowMessage] = useState("");

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("question", data.questionFile[0]);
        formData.append("title", data.title);

        fetch("http://localhost:3001/api/community/question", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message) {
                    setShowMessage(data.message);
                } else {
                    setShowMessage("Failed to upload question.");
                }
            })
            .catch((error) => {
                console.error(error);
                setShowMessage("An error occurred while uploading the question.");
            });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-lg font-semibold mb-4">{showMessage}</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
                </div>
  
                <div className="mb-4">
                    <label htmlFor="questionFile" className="block text-sm font-medium text-gray-700">Question File:</label>
                    <input
                        {...register("questionFile", { required: true })}
                        type="file"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.questionFile && <p className="text-red-500 text-sm mt-1">Question file is required</p>}
                </div>
                <input
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Questions;