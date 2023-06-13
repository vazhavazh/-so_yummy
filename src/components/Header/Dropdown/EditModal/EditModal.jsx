import style from './EditModal.module.scss';
import { ReactComponent as Cross } from '../../../../assets/svg/header/cross-2.svg';
import { ReactComponent as BlackUser } from '../../../../assets/svg/header/black-user.svg';
import grayUser from '../../../../assets/svg/header/gray-user.svg';
import plus from '../../../../assets/svg/header/plus.svg';
import edit from '../../../../assets/svg/header/edit.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/auth/authThunks';
import { getUserName, getIsEditModalOpen } from 'redux/auth/authSelectors';
import { toggleEditModal } from 'redux/auth/authSlice';

const EditModal = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState(null);

  const { name } = useSelector(getUserName);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser({ name: newName, avatar: newAvatar }));
  };

  const KEY_NAME_ESC = 'Escape';
  const KEY_EVENT_TYPE = 'keyup';

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleClose, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleClose, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose(e) {
    if (e.key === KEY_NAME_ESC) {
      dispatch(toggleEditModal(false));
    }
  }

  const isEditModalOpen = useSelector(getIsEditModalOpen);

  return (
    <div
      onClick={() => dispatch(toggleEditModal(false))}
      className={`${style.backdrop} ${
        isEditModalOpen ? '' : style.backdropHidden
      }`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`${style.modal} ${isEditModalOpen ? '' : style.modalHidden}`}
      >
        <button
          onClick={() => dispatch(toggleEditModal(false))}
          className={style.crossBtn}
        >
          <Cross className={style.cross} />
        </button>
        <form className={style.form}>
          <label htmlFor="avatar" className={style.label}>
            <img className={style.grayUser} src={grayUser} alt="gray user" />
            <img className={style.plusIcon} src={plus} alt="plus" />
          </label>
          <input
            type="file"
            className={style.fileInput}
            name="avatar"
            id="avatar"
            accept="image/png, image/jpeg"
            placeholder=""
            onChange={e => setNewAvatar(e.target.value)}
          />

          <div className={style.inputWrapper}>
            <input
              className={style.input}
              type="text"
              placeholder={name}
              onChange={e => setNewName(e.target.value)}
              required
            />
            <BlackUser className={style.blackUser} />
            <img className={style.editIcon} src={edit} alt="pencil" />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className={style.submitBtn}
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
