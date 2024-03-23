import { useState } from "react";
import { Album } from "../Types/Types";



interface ChildProps {
    combinedData: Album[];
    sortingData: (column: string, order: string) => void;
}

const Table: React.FC<ChildProps> = ({ combinedData, sortingData }) => {
    const [orderTitleTable, setOrderTitleTable] = useState<"asc" | "desc">("asc");
    const [orderAuthorTable, setOrderAuthorTable] = useState<"asc" | "desc">("asc");

    const toggleOrderTitle = () => {
        setOrderTitleTable(orderTitleTable === "asc" ? "desc" : "asc");
        sortingData("title", orderTitleTable);
    };

    const toggleOrderAuthor = () => {
        setOrderAuthorTable(orderAuthorTable === "asc" ? "desc" : "asc");
        sortingData("author", orderAuthorTable);
    };


    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3" onClick={toggleOrderTitle}>
                                Title {orderTitleTable === "asc" ? "▲" : "▼"}
                            </th>
                            <th scope="col" className="px-6 py-3" onClick={toggleOrderAuthor}>
                                Author {orderAuthorTable === "asc" ? "▲" : "▼"}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {combinedData.map(album => {
                            return (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {album.title}
                                    </th>
                                    <td className="px-6 py-4">{album.user?.name}</td>

                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Details
                                        </a>
                                    </td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    );
}


export default Table;