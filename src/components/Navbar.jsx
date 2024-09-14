import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logotext } from "../assets";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const openModal = () => setToggle(true);
  const closeModal = () => setToggle(false);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-2 fixed 
        top-0 z-20 bg-flashWhite sm:opacity-[.98] xxs:h-[12vh]`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logotext}
              alt="logo"
              className="sm:w-[140px] sm:h-[100px] w-[100px] h-[100px] -ml-[0.6rem] object-contain"
            />
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-french" : "text-eerieBlack"
                  } hover:text-taupe text-[21px] font-medium font-mova 
                  uppercase tracking-[3px] cursor-pointer nav-links`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={openModal}
            />
          </div>
        </div>
      </nav>

      <Modal
        isOpen={toggle}
        onRequestClose={closeModal}
        contentLabel="Navigation Menu"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="flex justify-end p-6">
          <img
            src={close}
            alt="close"
            className="w-[22px] h-[22px] object-contain cursor-pointer"
            onClick={closeModal}
          />
        </div>

        <ul className="list-none flex flex-col items-center justify-center h-full gap-8 text-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-french" : "text-eerieBlack"
                } text-[28px] font-bold font-arenq 
                uppercase tracking-[1px] cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                closeModal();
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </Modal>

      <style>{`
        .modal-overlay {
          background-color: rgba(0, 0, 0, 0.75);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .modal-content {
          background-color: #fff;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          border-radius: 0;
          outline: none;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Navbar;
