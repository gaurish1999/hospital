import React from 'react';

export default function discharge() {
  return <div className='App'>
      <form>
        <table border='1'>
            <thead>
                <tr>
                    <td colspan='2'><h1>Discharge Card</h1></td>
                </tr>
            </thead>
            <tr>
                <td><b>Case Summary: </b></td>
                <td><textarea cols='80' rows='15'></textarea></td>
            </tr>

            <tr>
                <td><b>Treatment Given: </b></td>
                <td><textarea cols='80' rows='15'></textarea></td>
            </tr>

            <tr>
                <td><b>Investigation: </b></td>
                <td><textarea cols='80' rows='15'></textarea></td>
            </tr>
        </table>
      </form>
  </div>;
}
