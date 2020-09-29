import { createSelector } from 'reselect';

const selectDirectory = state => state.directory

export const selectDirectorySlections = createSelector(
    [selectDirectory], 
    directory => directory.sections
)