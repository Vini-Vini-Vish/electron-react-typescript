import React from "react"

export const InfoItem = ({ infoId, selection }: any) => {
  return (
    <div className="">
      <div className="">
        <table className="" >
          <thead>
            <tr>
              <th>Nome</th>              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(infoId).map((item: any) => (
              <tr key={item[1]._id}>
                <td>{item[1].itemName}</td>                
                <td className="">
                  <button className="btnAlter" onClick={() => selection(item[1]._id)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  )
}