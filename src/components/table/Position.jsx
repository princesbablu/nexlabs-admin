import React from 'react'
import emptyData from '@/assets/empty-data.svg';
import Image from 'next/image';

const PositionTable = () => {
    return (
        <table className="table-fixed w-full border-collapse border border-[#161C10] heir-[th]:h-9 heir-[th]:border-b heir-[th]:border-[#161C10]">
            <thead>
                <tr className="text-[10px] text-[#ECF1F6]">
                    <th>Product</th>
                    <th>Size</th>
                    <th>Entry Price</th>
                    <th>Market Price</th>
                    <th>Unrealized Pnl</th>
                    <th>Realized Pnl</th>
                    <th>Liquidation Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={7}>
                        <div className="flex justify-center h-full py-20">
                            <Image src={emptyData} alt="" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default PositionTable