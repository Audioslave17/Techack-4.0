import { formateDate } from "../../utilis/formateDate";

const AmbulanceAbout = () => {
  return (

    <div>
        
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
               <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Mashoor Gulati
                </span> 
            </h3>
            <p className="text_para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum labore facilis reprehenderit aut! Officiis molestias qui quod quisquam optio, aperiam, nostrum corrupti nesciunt nulla numquam, expedita voluptas! Enim laboriosam unde nihil iste architecto. Vel fuga assumenda atque quisquam ex, repellendus quia hic ut ab. Voluptatibus nulla suscipit temporibus non quae!
            </p>
        </div>

        <div className="mt-12 ">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        {formateDate("09-13-2014")} - {formateDate("09-13-2016")} 
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Surgeon
                        </p>
                    </div>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Nilam Hospital, Rajpura, Punjab
                    </p>        
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                           {formateDate("07-04-2010")} - {formateDate("08-03-2014")} 
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Surgeon
                        </p>
                    </div>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Nilam Hospital, Rajpura, Punjab
                    </p>        
                </li>
            </ul>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Experience
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")} 
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        Sr. Surgeon
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Nilam Hospital, Rajpura, Punjab
                    </p> 
                </li>

                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")} 
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        Sr. Surgeon
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Nilam Hospital, Rajpura, Punjab
                    </p> 
                </li>
            </ul>
        </div>

    </div>
  );
};

export default AmbulanceAbout;