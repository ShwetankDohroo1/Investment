import { useState } from "react";

export default function Userinput({onChange,userinput}){
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userinput.initialinvestment} onChange={(event) => onChange('initialinvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userinput.annualinvestment} onChange={(event) => onChange('annualinvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userinput.exprectedreturn} onChange={(event) => onChange('exprectedreturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userinput.duration} onChange={(event) => onChange('duration',event.target.value)}/>
                </p>
            </div>
        </section>
    );
}