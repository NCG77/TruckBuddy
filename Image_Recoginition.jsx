import React, { useState } from "react";
import headerImg from "./assets/header.jpg";
import "./Image_Recoginition.css";

export default function Image_Recoginition() {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (image && description) {
            console.log("Image:", image);
            console.log("Description:", description);
        } else {
            alert("Please upload an image and provide a description.");
        }
    };

    return (
        <div>
            <div className="header">
                <nav>
                    <div className="nav__bar">
                        <div className="logo nav__logo">
                            <a href="#">
                                <img src={headerImg} alt="logo" />
                            </a>
                        </div>
                        <div className="nav__menu__btn">
                            <i className="ri-menu-3-line"></i>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="body">
                <div className="dashboard">
                    <div className="Image__adding__space">
                        <h2>Add Vehicle Image</h2>
                        <p>
                            Please upload an image of your vehicle and add a description to help
                            us better improve the AI model.
                        </p>
                        <form onSubmit={handleSubmit} className="image-upload-form">
                            <div className="form-group">
                                <label htmlFor="imageUpload">Upload Image</label>
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    rows="5"
                                    placeholder="Enter a brief description..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            {image && (
                                <div className="preview">
                                    <h4>Image Preview:</h4>
                                    <img src={image} alt="Preview" className="image-preview" />
                                </div>
                            )}
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
