import DataTable from "../components/DataTable"
import Background from '../assets/images/sky.jpg'

function Dashboard() {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${ Background })`,
        minHeight: "100vh",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center bg-cover bg-fixed"
    >
      <div className="mt-1 ml-5" style={{ width: "50%" }}>
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard

