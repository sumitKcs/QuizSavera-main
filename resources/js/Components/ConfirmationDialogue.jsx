const ConfirmationDialogue = ({
    isDialogueOpen,
    setIsDialogueOpen,
    handleConfirmBtn,
}) => {
    return (
        <div
            className={`absolute inset-0 ${
                isDialogueOpen ? "flex" : "hidden"
            } items-center justify-center bg-black p-8 bg-opacity-70`}
        >
            <div className="text-white border w-full max-w-md text-center flex flex-col gap-8 py-8 rounded-xl bg-slate-800">
                <p>Do you want to submit now?</p>
                <div className="flex justify-center gap-8">
                    <button
                        className=" rounded-xl py-2 px-4 bg-green-800"
                        onClick={handleConfirmBtn}
                    >
                        Yes
                    </button>
                    <button
                        className=" rounded-xl py-2 px-4 bg-red-700"
                        onClick={() => setIsDialogueOpen(false)}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialogue;