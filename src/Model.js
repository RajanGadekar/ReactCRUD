import React from 'react';

export default function Model() {
  return (
    <>
    <div>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>
</div>
<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title">Modal Heading</h4>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      Modal body..
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
{/* let obj = [{
    name:'Rajan',
    email:'raj@gmail.com'
},{
    name:'Yash',
    email:'yash@gmail.com'
},{
    name:'Amit',
    email:'amit@gmail.com'
}]

const data = obj.map(({email})=>({email}))
console.log(data)

let e = obj.map(item => ({ ...item }));
console.log(e) */}
</>
  )
}
