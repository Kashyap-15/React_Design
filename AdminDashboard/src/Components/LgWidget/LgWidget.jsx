import React from 'react'
import "./LgWidget.css"

export default function LgWidget() {

  const Button = ({ type }) => {
    return <button className={'lgWidgetButton ' + type}>{type}</button>
  }
  return (
    <div className='lgWidget'>
      <h3 className="lgWidgetTitle">Last Transactions</h3>
      <table className="lgWidgetTable">
        <tbody>

          <tr className="lgWidgetTr">
            <th className="lgWidgetTh">Customer</th>
            <th className="lgWidgetTh">Date</th>
            <th className="lgWidgetTh">Amount</th>
            <th className="lgWidgetTh">Status</th>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">21 July 2022</td>
            <td className="lgWidgetAmount">$765</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">2 June 2022</td>
            <td className="lgWidgetAmount">$965</td>
            <td className="lgWidgetStatus"><Button type="Pending" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">2 Mar 2022</td>
            <td className="lgWidgetAmount">$224</td>
            <td className="lgWidgetStatus"><Button type="Declined" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">30 May 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">22 Apr 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">5 Jan 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">5 Jan 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">5 Jan 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">5 Jan 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

          <tr className="lgWidgetTr">
            <td className="lgWidgetUser">
              <img src="Assests\TransactionProfile.jpg" alt="" className="lgWidgetImg" />
              <span className='lgWidgetName'>Susan Thapa</span>
            </td>
            <td className="lgWidgetDate">5 Jan 2021</td>
            <td className="lgWidgetAmount">$666</td>
            <td className="lgWidgetStatus"><Button type="Approved" /></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
