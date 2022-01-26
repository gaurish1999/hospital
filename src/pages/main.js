import React from 'react';

export default function main() {
  return <div className='App'>

            <form action='./config/response.php' >
                <table border='1'>
                <thead>
                    <tr>
                    <td colSpan='4'><h1>Health Card</h1></td>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td><label>Patient's name: </label></td>
                    <td colSpan='3'><input type='text'></input></td>
                </tr>

                <tr>
                    <td><label>Address: </label></td>
                    <td colSpan='3'><input type='text'></input></td>
                </tr>

                <tr>
                    <td><label>Age: </label></td>
                    <td colSpan='3'><input type='number'></input></td>
                </tr>

                <tr>
                    <td><label>Sex: </label></td>
                    <td colSpan='3'>
                    <label><input type='radio' value='opt1' name='o1'></input>Male</label>
                    <label><input type='radio' value='opt1' name='o1'></input>Female</label>
                    <label><input type='radio' value='opt1' name='o1'></input>Others</label>
                    </td>
                </tr>

                <tr>
                    <td><label>Weight (at birth): </label></td>
                    <td colSpan='3'><input type='number'></input></td>
                </tr>

                <tr>
                    <td><label>Diagnosis: </label></td>
                    <td colSpan='3'><input type='text'></input></td>
                </tr>

                <tr>
                    <td><label>Date of admission: </label></td>
                    <td> <input type='date'></input></td>
                    <td><label>(Wt.): </label></td>
                    <td><input type='number'></input></td>
                </tr>

                <tr>
                    <td><label>Date of discharge: </label></td>
                    <td ><input type='date'></input></td>
                    <td><label>(Wt.): </label></td>
                    <td><input type='number'></input></td>
                </tr>   

                </tbody>

                <tfoot>
                <tr>
                    <td colspan='4'>
                    <button>Submit</button>
                    </td>
                </tr>
                </tfoot>

                </table>
            </form>

  </div>;
}
