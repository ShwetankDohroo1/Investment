import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({userinput}){

    const result = calculateInvestmentResults(userinput);
    const intialinvestment = result[0].value - result[0].interest - result[0].annualinvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(yeardata=>{
                    const totalinterest = yeardata.value - yeardata.annualinvestment * yeardata.year - intialinvestment;
                    const totalamountinvested = yeardata.value - totalinterest;

                    return <tr key={yeardata.year}>
                        <td>{yeardata.year}</td>
                        <td>{formatter.format(yeardata.value)}</td>
                        <td>{formatter.format(yeardata.interest)}</td>
                        <td>{formatter.format(totalinterest)}</td>
                        <td>{formatter.format(totalamountinvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}