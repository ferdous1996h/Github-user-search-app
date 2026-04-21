import React from 'react';
import { CiSearch } from 'react-icons/ci';
export default function SearchBox({ handleInput }) {
  return (
    <section className="searchSpace">
      <form action={handleInput}>
        <section className="searchSpace_input">
          <CiSearch className="search_icon" />
          <input
            type="text"
            name="hub_info"
            id="hub_info-id"
            className="main_input"
            placeholder="Search Github username..."
            autoComplete='off'
          />
          <button type="submit">Search</button>
        </section>
      </form>
    </section>
  );
}
