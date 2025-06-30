import React, { useState, useEffect } from "react";
import Program from "../layouts/Program";
import image from "../assets/image/imgProgram7Hari.png";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Button from "../components/Button";

const DetailProgram = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [program, setPrograms] = useState(null);
  const [error, setError] = useState(null);

  

  const handleStartProgram = () => {
    navigate(`/formdatafisik/${id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/program/${id}`)
      .then((response) => setPrograms(response.data.data))
      .catch((err) => setError(err.message));
  }, [id]); // Gunakan ID sebagai dependency, berarti ketika idnya berupa fetch datanya

  if (error) return <div>Error cok: {error}</div>;
  if (!program) return <div>Loading...</div>;

  return (
    <Program
      image={image}
      info={
        <>
          {" "}
          <h3 className="font-bold text-white">Hidup sehat mulai dari sini!</h3>
          <p className="text-white">
            Ikuti program harian yang dirancang khusus untuk membentukkebiasaan
            sehat secara konsisten dan menyenangkan.
          </p>
        </>
      }
      tombol={
        <>
          <Button onClick={handleStartProgram} className="absolute bottom-0 right-0 font-bold py-4">
            Mulai Program
          </Button>
        </>
      }
    >
      <h3 className="font-semibold text-2xl mt-[30px]">{program.name}</h3>
      <p className="w-[500px]">{program.description}</p>
    </Program>
  );
};

export default DetailProgram;
