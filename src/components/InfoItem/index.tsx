import React from "react"

export const InfoItem = ({ infoId, selection }: any) => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>     
              <th>Descrição</th>           
              <th>Valor</th>   
              <th>Quantidade</th>   
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(infoId).map((item: any) => (
              <tr key={item[1]._id}>
                <td>{item[1].itemName}</td>     
                <td>{item[1].itemDesc}</td>   
                <td>{item[1].itemValor}</td>   
                <td>{item[1].itemQuant}</td>          
                <td>
                  <button onClick={() => selection(item[1]._id)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  )
}