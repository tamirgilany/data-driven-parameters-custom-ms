import * as React from 'react';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS

/* tslint:disable:no-console */

export interface MultipleSelectorProps {
  selected: any;
  numberDisplayed?: number;
  options: any[];
  filterDebounce?: number;
  dropdownHeight?: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  tabIndex?: string | number;
  keepOpen?: boolean;
  selectAllText?: string;
  multiple: boolean;
  getFilterValue: (term: string) => any;
}

// Shows if setting has not yet been configured
export const MultipleSelector: React.SFC<MultipleSelectorProps> = props => {
  return (
    <div className='multipleSelector'>
      <Picky
        value={props.selected}
        options={props.options}
        onChange={props.onChange}
        valueKey='id'
        labelKey='name'
        includeSelectAll={true}
        includeFilter={true}
        dropdownHeight={props.dropdownHeight}
        multiple={props.multiple}
        keepOpen={props.keepOpen}
        filterPlaceholder='Enter search text'
        allSelectedPlaceholder='All Selected'
        selectAllText='(All)'
        defaultFocusFilter={true}
        getFilterValue={props.getFilterValue}
        numberDisplayed={2}
      />
    </div>
  );
};

MultipleSelector.displayName = 'MultipleSelector';
