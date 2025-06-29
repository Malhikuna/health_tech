import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import bgLogin from "../assets/image/bgLogin.png";
import imgForm from "../assets/image/imgFormDataFisik.png";
import Button from "../components/Button";
import InputForm from "../components/Input";
import Label from "../components/Input/Label";
import axios from "axios";

const FormDataFisik = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    program_id: id,
    profile_data: {
      height: "",
      weight: "",
      age: "",
      gender: "",
      activity_level: "",
      goal: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // jika input milik profile_data
    if (
      ["height", "weight", "age", "gender", "activity_level", "goal"].includes(
        name
      )
    ) {
      setForm((prev) => ({
        ...prev,
        profile_data: {
          ...prev.profile_data,
          [name]: value,
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/start-program",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      console.log(res.data.data);
      navigate("/dashboard");
    } catch (err) {
      alert("Terjadi kesalahan");
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="w-full h-screen flex items-center justify-center">
        <div
          className="w-[1008px] h-[695px] bg-cover bg-center bg-no-repeat rounded-[30px] p-10 flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${imgForm})` }}
        >
          <h2 className="text-white text-3xl font-bold mb-6">ISI DATA FISIK</h2>

          <form
            onSubmit={handleSubmit}
            className="w-[600px flex flex-col items-center gap-6"
          >
            <div className="flex w-full gap-6">
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="cm"
                label="Tinggi Badan"
                type="number"
                name="height"
                onChange={handleChange}
              />
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="kg"
                label="Berat Badan"
                type="number"
                name="weight"
                onChange={handleChange}
              />
            </div>

            <div className="flex w-full items-center gap-6">
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="tahun"
                label="Umur"
                type="number"
                name="age"
                onChange={handleChange}
              />

              <div className="w-1/2 mb-2">
                <Label>Jenis Kelamin</Label>
                <select
                  name="gender"
                  onChange={handleChange}
                  className="w-full p-2 rounded-3xl"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="pria">Pria</option>
                  <option value="wanita">Wanita</option>
                </select>
              </div>
            </div>

            {/* Full width input */}
            <div className="w-full">
              <Label>Level Aktivitas</Label>
              <select
                name="activity_level"
                onChange={handleChange}
                className="w-full p-2 rounded-3xl"
              >
                <option value="">Level Aktivitas</option>
                <option value="ringan">ringan</option>
                <option value="sedang">sedang</option>
                <option value="berat">berat</option>
              </select>
            </div>

            <div className="w-full">
              <InputForm
                classNameInput="bg-white"
                placeholder="Misalnya: Menurunkan berat badan"
                label="Tujuan"
                type="text"
                name="goal"
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="mt-4 px-10 py-2 rounded-full bg-[#42887E] text-white font-bold"
            >
              KIRIM
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormDataFisik;
