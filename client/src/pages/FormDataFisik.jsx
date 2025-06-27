import bgLogin from "../assets/image/bgLogin.png";
import imgForm from "../assets/image/imgFormDataFisik.png";
import Button from "../components/Button";
import InputForm from "../components/Input";

const FormDataFisik = () => {
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

          <form className="w-[600px flex flex-col items-center gap-6">
      
            <div className="flex w-full gap-6">
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="cm"
                label="Tinggi Badan"
              />
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="kg"
                label="Berat Badan"
              />
            </div>

            <div className="flex w-full gap-6">
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="tahun"
                label="Umur"
              />
              <InputForm
                className="w-1/2"
                classNameInput="bg-white"
                placeholder="L/P"
                label="Jenis Kelamin"
              />
            </div>

            {/* Full width input */}
            <div className="w-full">
              <InputForm
                classNameInput="bg-white"
                placeholder="Misalnya: Ringan, Sedang, Berat"
                label="Level Aktivitas"
              />
            </div>

            <div className="w-full">
              <InputForm
                classNameInput="bg-white"
                placeholder="Misalnya: Menurunkan berat badan"
                label="Tujuan"
              />
            </div>

            <Button type="submit" className="mt-4 px-10 py-2 rounded-full bg-[#42887E] text-white font-bold">
              KIRIM
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormDataFisik;
