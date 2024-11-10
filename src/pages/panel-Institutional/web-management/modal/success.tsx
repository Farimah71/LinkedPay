import { SuccessModal } from "../../../../components/actionModals/success"
import { useAppDispatch } from "../../../../hooks/redux-hooks"
import { setShowModal } from "../../../../redux/reducers/show-modal";
import { BaseModalProps } from "../../../../types/modal.types"

export const SuccessCreateInstitutionalWebsite : React.FC<BaseModalProps> = ({
    state,
    onCloseModal
}) => {
    const dispatch=useAppDispatch();
    return (
        <SuccessModal
        title="Ön başvurunuzu aldık."
        subTitle="Mayo spinach lasagna NY personal. Burnt lot Hawaiian olives Hawaiian white tomato tomato anchovies. Ricotta white and pan mouth. Burnt fresh bacon parmesan sauce broccoli. Pan style Aussie chicken lot green deep NY pineapple hand. Garlic olives Bianca tomato deep crust meatball deep beef platter. Bacon ranch beef pepperoni fresh tomatoes fresh."
        confirmLabel="Ana Sayfaya Dön"
        isButtonOutline={true}
        state={state}
        onCloseModal={() => dispatch(setShowModal({isShow:false , type:""}))}
         />
    )
}