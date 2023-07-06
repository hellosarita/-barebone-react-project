import React from "react";
import './Table.css';

const Table =()=> (
    <div>
        <div className="table">
        <table className="table-width">
            <tr>
             <th className="padd-a" colspan="4">Buckets you own</th>
    
             </tr>
             <tr  colspan="4" className="tr-1">
                <td  colspan="1" className="bottom-b">Name</td>
                <td className="bottom-b">budget</td>
                <td className="bottom-b">Speed</td>
                <td className="bottom-b">Forecast</td>

            </tr>
            <tr>
                <td className="c-td">ACML Corp</td>
                 <td className="tr-1">$2000,000</td>
                 <td className="tr-1">$173,72</td>
                 <td className="tr-1">$205,049</td>
            </tr>
            <tr>
                 <td className="c-td">Raman Inc</td>
                 <td className="tr-1">$2000,000</td>
                 <td className="tr-1">$124,762</td>
                 <td className="tr-1">$292,629</td>
                 </tr>
        </table>
        </div>
        <br></br>
        <div className="table">
        <table className="table-width">
            <tr>
             <th className="padd-a" colspan="5">Approvals assigned to you</th>
    
             </tr>
             <tr  colspan="4" className="tr-1">
                <td  colspan="1" className="bottom-b"> Bucket Name</td>
                <td className="bottom-b">Current Budget</td>
                <td className="bottom-b">Requested Budget</td>
                <td colspan ="2" className="bottom-b">Requested By</td>

            </tr>
            <tr>
                <td className="c-td">ACML Corp</td>
                 <td className="tr-1">$200,000</td>
                 <td className="tr-1">$2250,00</td>
                 <td className="c-td" >Joe Hilfingner</td>
                 <td >
                 <button class="button_tabel">
                <div class="button_tabel_text_hero">Approve</div>
                 </button>  
                < button class="button_tabel">
                     <div class="button_tabel_text_zero"> Reject </div>
                    </button>  
                    </td>
                 
            </tr>
            
        </table>
        </div>
        <br></br>
        <div className="table">
        <table className="table-width">
            <tr>
             <th className="padd-a" colspan="6">Buckets you are member of </th>
    
             </tr>
             <tr  colspan="4" className="tr-1">
                <td  colspan="" className="bottom-b"> Name</td>
                <td className="bottom-b">Budget</td>
                <td className="bottom-b">speed</td>
                <td className="bottom-b">Forecast</td>

            </tr>
            <tr>
                <td className="c-td">Longate</td>
                 <td className="tr-1">$2000,000</td>
                 <td className="tr-1">$173,072</td>
                 <td className="tr-1">292,692</td>
                 
            </tr>
            
        </table>

        </div>
    </div>
    
)
export default Table;