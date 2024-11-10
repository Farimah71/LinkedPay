import user from "../../../assets/images/user.png"
import { IconArrowDown, IconArrowRight, IconArrowRight2, IconClipboard, IconLink, IconPlus, IconSupport, IconUser, IconWebPage } from "../../../components/icons/icons";
import { CustomSelect } from "../../panel-personal/panel/components/custom-select";
import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid } from 'recharts';
import { AreaChart, Area} from 'recharts';
import { PosTransaction } from "../../panel-personal/panel/components/pos-transaction";import bo from "../../../assets/images/bo.png"
import spotify from "../../../assets/images/spotify.png"
import hepsi from "../../../assets/images/hepsi.png"
import userTransaction from "../../../assets/images/user-transaction.png"
import plusTransaction from "../../../assets/images/plus-transaction.png"



const PanelInstitutional:React.FC = () => {
    const dataBarChart = [
        {
          name: 'DEC 20',
          uv: 6.5,
          pv: 1,
        },
        {
          name: 'JAN 21',
          uv: 5,
          pv: 2.5,
        },
        {
          name: 'FEB 21',
          uv: 7,
          pv: 1.5,
        },
        {
          name: 'MAR 21',
          uv: 6,
          pv: 1.5,
        },
        {
          name: 'APR 21',
          uv: 2,
          pv: 7,
        },
        {
          name: 'MAY 21',
          uv: 1.5,
          pv: 5.5,
        },
      ];

      const dataAreaChart = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <div className="w-full h-full grid grid-cols-3 gap-6 p-6">
            <div className="w-full h-full grid grid-rows-[195px_1fr_auto] gap-6">
                <div className="w-full bg-actual-white p-10 rounded-2.5xl">
                    <div className="flex items-center gap-4 pb-4 border-b border-base-content-10">
                        <div className="w-10 h-10 flex justify-center items-center bg-dark-green/5 rounded-full">
                            <p className="text-sm text-dark-green">RS</p>
                        </div>
                        <div>
                            <p className="text-sm text-base-content-40">İyi günler,</p>
                            <h3 className="text-lg text-base-content font-medium">Bestami Çoban</h3>
                        </div>
                        <div className="ml-auto">
                            <div className="flex items-center cursor-pointer gap-2 px-4 py-3 bg-dark-green/5 text-dark-green rounded-2.5xl text-[12px]">
                                <p>Değiştir</p>
                                <IconArrowDown width={20} height={20} viewBox="0 0 20 20" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <img className="w-6 h-6 rounded-full" src={user} alt="" />
                            <p>Bestami</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-base-content/5">

                        </div>
                        <div>
                            <span className="text-base-content">Yetkiniz: </span>
                            <span className="text-dark-green">Yönetici</span>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-actual-white p-10 rounded-2.5xl">
                    <div className="w-full flex justify-between pb-6 border-b border-base-content-10">
                        <div>
                            <h3 className="text-2xl text-base-content font-medium">₺34.265,83</h3>
                            <p className="text-sm text-base-content-40 mt-1">Son 30 Gün</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-base-content-40">Toplam İşlemler</p>
                            <p className="text-sm text-dark-green mt-1">₺1.907.265,83</p>
                        </div>
                    </div>
                    <div className="w-full text-left pt-4 mt-4">
                        <p className="text-sm text-base-content-40">Son 30 Gün</p>
                        <div className="flex flex-col gap-4 mt-6">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-success"></div>
                                    <p className="text-success font-medium">İptaller</p>
                                </div>
                                <p className="text-base-content font-medium">₺10.000,00</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-error"></div>
                                    <p className="text-error font-medium">İadeler</p>
                                </div>
                                <p className="text-base-content font-medium">₺10.000,00</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-light-purple"></div>
                                    <p className="text-light-purple font-medium">Charceback’ler</p>
                                </div>
                                <p className="text-base-content font-medium">₺10.000,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-actual-white rounded-2.5xl p-10">
                    <div className="w-full flex items-center gap-4 pb-6 border-b">
                        <div className="w-14 h-14 flex justify-center items-center bg-base-content-3 rounded-full">
                            <IconSupport width={28} height={28} viewBox="0 0 24 24" />
                        </div>
                        <h3 className="text-lg text-base-content font-medium">Destek Taleplerim</h3>
                        <IconArrowRight2 className="ml-auto" />
                    </div>
                    <div className="w-full flex items-center gap-4 pt-6">
                        <div className="w-14 h-14 flex justify-center items-center bg-base-content-3 rounded-full">
                            <IconPlus width={28} height={28} viewBox="0 0 24 24" />
                        </div>
                        <h3 className="text-lg text-base-content font-medium">Yeni Destek Talebi</h3>
                        <IconArrowRight2 className="ml-auto" />
                    </div>
                </div>
            </div>
            <div className="w-full col-span-2 grid grid-rows-[195px_1fr] gap-6">
                <div className="w-ful h-full grid grid-cols-4 bg-actual-white p-4 rounded-2.5xl">
                    <div className="flex flex-col justify-center items-center gap-2 border-r">
                        <div className="w-16 h-16 flex justify-center items-center bg-dark-green/5 text-dark-green rounded-full">
                            <IconLink width={28} height={28} viewBox="0 0 24 24" />
                        </div>
                        <h3 className="text-lg text-base-content">Ödeme Linkleri</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 border-r">
                        <div className="w-16 h-16 flex justify-center items-center bg-[#144B7E08] text-[#144B7E] rounded-full">
                            <IconWebPage width={28} height={28} viewBox="0 0 24 24" />
                        </div>
                        <h3 className="text-lg text-base-content">Web Site Yönetimi</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 border-r">
                        <div className="w-16 h-16 flex justify-center items-center bg-[#6865FA08] text-[#6865FA] rounded-full">
                            <IconClipboard width={28} height={28} viewBox="0 0 24 24" />
                        </div>
                        <h3 className="text-lg text-base-content">Raporlarım</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-16 h-16 flex justify-center items-center bg-[#EC673708] text-[#EC6737] rounded-full">
                            <IconUser width={28} height={28} viewBox="0 0 24 24" />
                        </div>
                        <h3 className="text-lg text-base-content">Kullanıcı Yönetimi</h3>
                    </div>
                </div>
                <div className="w-full h-full grid grid-cols-2 gap-6">
                    <div className="w-full grid grid-rows-2 gap-6">
                        <div className="bg-actual-white flex flex-col pt-6   rounded-2.5xl">
                            <div className="mb-4 px-6">
                                <h3 className="text-xl text-base-content font-medium">Gelirler</h3>
                            </div>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                width={500}
                                height={300}
                                data={dataBarChart}
                                barSize={15}
                                >
                                <CartesianGrid height={1} color="#F1F5F9" />
                                <XAxis dataKey="name" style={{fontSize:"12px" , color:"#94A3B8"}} tickSize={0} tickMargin={10} strokeWidth={0} />
                                <YAxis type="number" strokeWidth={0} unit="K" tick={{fontSize:"14px"}} />
                                <Bar dataKey="pv" fill="#38BDF8" activeBar={<Rectangle fill="#38BDF8" stroke="#38BDF8" />} />
                                <Bar dataKey="uv" fill="#6366F1" activeBar={<Rectangle fill="#6366F1" stroke="#6366F1" />} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-actual-white flex flex-col p-6 rounded-2.5xl">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl text-base-content font-medium">Charceback’ler</h3>
                                <CustomSelect />
                            </div>
                            <div className="flex items-start gap-1">
                                <h3 className="text-3xl text-[#1E293B] font-inter font-bold">$9.962</h3>
                                <p className="text-sm text-actual-white bg-[#10B981] font-inter font-medium px-1 rounded-2.5xl">+29%</p>
                            </div>
                            <div className="w-full h-full flex-grow mt-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                    width={200}
                                    height={60}
                                    data={dataAreaChart}
                                    margin={{
                                        top: 5,
                                        right: 0,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                    >
                                    <Area type="monotone" dataKey="uv" stroke="#6366F1" strokeWidth={3} fill="#3B82F614" />
                                    <Area type="monotone" dataKey="pv" stroke="#CBD5E1" strokeWidth={3} fill="none" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-xl text-base-content font-medium">Son Sanal Pos İşlemleri</h3>
                            <div className="flex items-center gap-x-2 text-dark-green">
                                <p className="font-medium">Tümünü Göster</p>
                                <IconArrowRight />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="w-full flex items-start gap-2 py-2">
                                <div>
                                    <img src={bo} alt="" />
                                </div>
                                <div className="flex flex-grow justify-between items-center border-b pb-4">
                                    <div>
                                        <h3 className="text-lg text-base-content font-medium">apple.com</h3>
                                        <p className="text-sm text-base-content-40 mt-1">Salı, 10:57</p>
                                    </div>
                                    <p className="text-lg text-success font-medium">₺1.000,00</p>
                                </div>
                            </div>
                            <div className="w-full flex items-start gap-2 py-2">
                                <div>
                                    <img src={spotify} alt="" />
                                </div>
                                <div className="flex flex-grow justify-between items-center border-b pb-4">
                                    <div>
                                        <h3 className="text-lg text-base-content font-medium">dronfabrikası.com.tr</h3>
                                        <p className="text-sm text-base-content-40 mt-1">Salı, 10:57</p>
                                    </div>
                                    <p className="text-lg text-success font-medium">₺30,99</p>
                                </div>
                            </div>
                            <PosTransaction title="elbisedünyası.com" subTitle="Salı, 10:57" price="₺3.890,41" image={hepsi} />
                            <PosTransaction title="Linkle Ödeme" subTitle="Salı, 10:57" price="₺1.000,00" image={userTransaction} />
                            <PosTransaction title="Bakiye Yükleme" subTitle="Salı, 10:57" price="₺3.890,41" image={plusTransaction} />
                            <PosTransaction title="Bakiye Yükleme" subTitle="Salı, 10:57" price="₺3.890,41" image={plusTransaction} isLast={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelInstitutional;