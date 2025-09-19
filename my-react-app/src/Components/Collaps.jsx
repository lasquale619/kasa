import { useState } from "react";
import Chevron from "@/assets/chevron-up.svg";

export default function Collaps({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <article className="collaps">
            <button
                type="button"
                className="collaps__header"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span className="collaps__title">{title}</span>
                <span
                    className="collaps-chevron"                           
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                    <img src={Chevron} alt="" aria-hidden="true" />
                </span>
            </button>

            <div className={`panel ${open ? "is-open" : ""}`}>
                <div className="panel__inner">
                    <div className="panel-body">
                    {children}
                    </div>
                </div>
            </div>
        </article>
    );
}
