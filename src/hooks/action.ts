import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { notebookActions } from "../store/notebook/notebook.slice";

const actions = {
    ...notebookActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}