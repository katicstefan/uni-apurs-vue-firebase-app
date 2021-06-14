<template>
  <div class="faculties">
    <h1>Faculties component</h1>
    <button>Add new</button>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FTN</td>
            <td>Strazilovska bb</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faculties"
}
</script>

<style>
.container {
  background-color: #fafafa;
  margin-right: 40px;
  padding: 40px;
  border: 1px solid #9b9b9b;
  border-radius: 10px;
}

table {
   border-collapse: collapse;
}

td, th {
  padding-bottom: 40px;
  padding-right: 40px;
  text-align: left;
}
</style>
