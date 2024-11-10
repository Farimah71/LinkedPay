import user from "../../../assets/images/user.png";
import { PieChart, Pie , Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid } from 'recharts';
import { AreaChart, Area} from 'recharts';
import { IconArrowRight } from "../../../components/icons/icons";
import bo from "../../../assets/images/bo.png"
import spotify from "../../../assets/images/spotify.png"
import { PosTransaction } from "./components/pos-transaction";
import hepsi from "../../../assets/images/hepsi.png"
import userTransaction from "../../../assets/images/user-transaction.png"
import plusTransaction from "../../../assets/images/plus-transaction.png"
import { CustomSelect } from "./components/custom-select";

const data = [
    { name: 'Group A', value: 270 },
    { name: 'Group B', value: 270 },
    { name: 'Group C', value: 350 },
  ];
  const COLORS = ['#6366F1', '#3730A3', '#38BDF8'];

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


const PanelPersonal : React.FC = () => {
    return (
        <div className="w-full h-full grid grid-cols-3 gap-6 p-6">
            <div className="w-full h-full grid grid-rows-[auto_1fr] gap-6">
                <div className="w-full bg-actual-white p-6 rounded-2.5xl">
                    <div className="flex items-center gap-4 pb-4 border-b border-base-content-10">
                        <img className="rounded-full" src={user} alt="" />
                        <div>
                            <p className="text-sm text-base-content-40">İyi günler,</p>
                            <h3 className="text-lg text-base-content font-medium">Bestami Çoban</h3>
                        </div>
                    </div>
                    <div className="pt-4 pb-2">
                        <span className="text-sm text-base-content">Hesap No: </span>
                        <span className="text-sm text-dark-green">1234567890</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-6 bg-actual-white rounded-2.5xl">
                    <div className="relative">
                        <PieChart width={300} height={300}>
                            <Pie
                            width={400}
                            height={400}
                            data={data}
                            innerRadius={90}
                            outerRadius={120}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                            <h3 className="text-xl text-base-content font-semibold">563 Adet</h3>
                            <p className="text-xs text-base-content-40 mt-1">Yapılan İşlemler</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between py-6 border-b border-base-content-10">
                        <div>
                            <h3 className="text-xl text-base-content font-medium">₺34.265,83</h3>
                            <p className="text-sm text-base-content-40 mt-1">Son 30 Gün</p>
                        </div>
                        <div>
                            <p className="text-sm text-base-content-40">Toplam İşlemler</p>
                            <p className="text-sm text-dark-green mt-1">₺1.907.265,83</p>
                        </div>
                    </div>
                    <div className="w-full text-left py-4">
                        <p className="text-sm text-base-content-40">Son 30 Gün</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-dark-purple"></div>
                                    <p className="text-dark-purple font-medium">QR</p>
                                </div>
                                <p className="text-base-content font-medium">₺10.000,00</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-light-blue"></div>
                                    <p className="text-light-blue font-medium">QR</p>
                                </div>
                                <p className="text-base-content font-medium">₺10.000,00</p>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-light-purple"></div>
                                    <p className="text-light-purple font-medium">QR</p>
                                </div>
                                <p className="text-base-content font-medium">₺10.000,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full grid grid-rows-3 gap-6">
                <div className="bg-actual-white flex flex-col pt-6 rounded-2.5xl">
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
                <div className="bg-actual-white flex flex-col p-6 rounded-2.5xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl text-base-content font-medium">Charceback’ler</h3>
                        <CustomSelect />
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
            <div className="w-full h-full grid grid-rows-[1fr_auto] gap-6">
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
                        <PosTransaction title="Bakiye Yükleme" subTitle="Salı, 10:57" price="₺3.890,41" image={plusTransaction} />
                        <PosTransaction title="Bakiye Yükleme" subTitle="Salı, 10:57" price="₺3.890,41" image={plusTransaction} isLast={true} />
                    </div>
                </div>
                <div className="w-full flex items-center gap-2 bg-actual-white rounded-2.5xl p-6">
                    <div>
                        <img src={plusTransaction} alt="" />
                    </div>
                    <div>
                        <p className="text-sm text-base-content-40">Yeni talep oluştur.</p>
                        <h3 className="text-base-content mt-1">Herhangi bir destek talebiniz yok.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelPersonal;