import React, { useState } from "react";
import useModalStore from "../../../store/Model";

const interestsList = [
  "Interest 1", "Interest 2", "Interest 3", "Interest 4",
  "Interest 5", "Interest 6", "Interest 7", "Interest 8",
  "Interest 9", "Interest 10", "Interest 11", "Interest 12"
];

const InterestSelection = () => {
  const { isOpen, closeModal } = useModalStore();
  const [selectedInterests, setSelectedInterests] = useState([]);

  if (!isOpen) return null;

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-[30px] font-bold text-center text-green-600">INTERESTS</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {interestsList.map((interest, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border-2 rounded-lg px-4 py-2 cursor-pointer transition-all ${
                selectedInterests.includes(interest)
                  ? "bg-green-100 border-green-500"
                  : "border-gray-300"
              }`}
              onClick={() => toggleInterest(interest)}
            >
              <span>{interest}</span>
              <input
                type="checkbox"
                checked={selectedInterests.includes(interest)}
                className="accent-green-600 cursor-pointer"
                readOnly
              />
            </div>
          ))}
        </div>
        <button
          className="mt-6 w-full py-2 bg-green-600 text-white rounded-md font-medium text-lg"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default InterestSelection;
