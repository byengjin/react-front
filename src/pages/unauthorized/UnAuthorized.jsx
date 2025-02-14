import { Link } from "react-router-dom";

const UnAuthorized=() => {
    return (
        <div className='row'>
            <div className='col-md-12 text-center'>
                <span className='display-1'>401</span>
                <div className='mb-4 lead'>권한없음! 이 주소로 접근이 거부되었습니다.</div>

                <Link to='/home' className='btn btn-link'>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
export default UnAuthorized;