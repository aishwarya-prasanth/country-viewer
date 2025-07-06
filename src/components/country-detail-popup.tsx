import { useGetCountryDetails } from "hooks/use-get-country-details";
import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  countryCode: string;
  onClose: () => void;
};

const NothingToShow = () => {
  return <div className="text-grey-2 italic text-sm">No details to show</div>;
};

export const CountryDetailPopup = ({ isOpen, onClose, countryCode }: Props) => {
  const { data: countryDetails, loading: isLoadingDetails } =
    useGetCountryDetails(countryCode);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // auto focusing close button once popup is opened
    if (isOpen && modalRef.current) {
      const closeBtn = modalRef.current.querySelector(
        "button[aria-label='Close']"
      );
      if (closeBtn instanceof HTMLElement) closeBtn.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // trapping focus within the modal once open
    const trapFocus = (e: KeyboardEvent) => {
      if (!modalRef.current || !isOpen) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }

      if (e.key === "Escape") {
        onClose(); // Optional: close on Escape
      }
    };

    document.addEventListener("keydown", trapFocus);

    return () => {
      document.removeEventListener("keydown", trapFocus);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[80%] h-[80%]  relative flex flex-col"
        ref={modalRef}
      >
        <div className="flex justify-between bg-blue-1 rounded-t-lg h-[10%] items-center px-3 shrink-0">
          <h2 className="text-xl font-semibold text-blue-2">
            {countryDetails?.country?.name || " - "}
          </h2>
          <div className="flex space-x-3 items-center">
            <div className="bg-blue-4 rounded-xl text-sm px-3 font-semibold py-1">
              {countryCode || " - "}
            </div>
            <button
              className="text-gray-500 hover:text-black text-3xl mb-2"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-4 overflow-y-auto space-y-4 flex-grow flex flex-col">
          {isLoadingDetails ? (
            <div className="text-center text-lg font-medium">Loading...</div>
          ) : (
            <>
              <div className="bg-blue-2 w-full rounded-lg p-2 border border-grey-1 shadow-md font-medium">
                <span className="text-blue-1">Currency</span>
                {countryDetails?.country?.currency ? (
                  <div>{countryDetails?.country?.currency}</div>
                ) : (
                  <NothingToShow />
                )}
              </div>

              <div className="bg-blue-2 w-full rounded-lg p-2 border border-grey-1 shadow-md font-medium">
                <span className="text-blue-1">Languages</span>
                <div className=" w-full">
                  {countryDetails?.country?.languages.length ? (
                    <ul className="list-disc list-inside marker:text-blue-1 text-sm font-normal">
                      {countryDetails?.country?.languages?.map((item) => (
                        <li key={item.name}>{item.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <NothingToShow />
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-grow bg-blue-2 w-full rounded-lg p-2 border border-grey-1 shadow-md font-medium">
                <span className="font-medium">States</span>
                <div className="flex-grow mt-2">
                  {countryDetails?.country?.states?.length === 0 ? (
                    <NothingToShow />
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {countryDetails?.country?.states?.map((state) => (
                        <div
                          key={state.name}
                          className="bg-blue-4 rounded-xl text-sm h-6 px-2 items-center border border-blue-5 text-blue-5 font-semibold"
                        >
                          {state?.name || " - "}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
