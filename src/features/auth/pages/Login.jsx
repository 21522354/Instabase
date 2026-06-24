import TextBox from "../components/TextBox";
import Button from "../components/Button";
import facebookIcon from "../../../assets/icon-fb.png";
import instagramIcon from "../../../assets/instagram.png";
import "./Login.css";

function Login() {
    return (
        <div className="min-h-screen w-full bg-black text-white flex">
            <div className="hidden lg:flex lg:w-4/7 flex-col pt-10 ps-10 relative">
                <img
                    className="ins-icon"
                    src={instagramIcon}
                    alt="Instagram"
                />
                <div className="lg-flex flex-col p-10 justify-items-center items-center">
                    <h1 className="text-4xl text-white font-bold mx-10 mb-10 text-center">Hãy xem các khoảnh khắc thường ngày của <span className="text-fuchsia-800">bạn thân</span> nhé</h1>
                    <img
                        className="ins-image"
                        src={"https://static.cdninstagram.com/rsrc.php/yN/r/-erGonz07kB.webp"}
                        alt="Instagram"
                    />
                </div>
            </div>
            
            <div className="w-full lg:w-3/7
             bg-gray-900 flex flex-col items-center
               lg:border-l border-neutral-700 px-8">
                {/* Nội dung: Component TextBox, Button, Form đăng nhập sẽ nằm ở đây */}
                <h1 className="text-xl text-white font-bold self-start my-2 mt-30">Đăng nhập vào Instagram</h1>
                <TextBox label={"Số di động, tên người dùng hoặc email"}></TextBox>
                <TextBox label={"Mật khẩu"} type="password"></TextBox>
                <Button variant="primary" type="submit" children={"Đăng nhập"}/>
                <Button variant="secondary" children={"Quên mật khẩu"}/>
                <div className="h-20"></div>
                <Button 
                    variant="secondary" 
                    icon={facebookIcon}
                    children={"Đăng nhập bằng Facebook"}
                />
                <Button variant="outline" children={"Tạo tài khoản mới"} />
            </div>

        </div>
    );
}

export default Login;
