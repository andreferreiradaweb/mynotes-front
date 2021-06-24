import ApiService from './api'

const NotesService = {
  index: () =>
    ApiService.get('/notes', {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
  createNote: (params) =>
    ApiService.post('/notes', { ...params }, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
  delete: (noteId) =>
    ApiService.delete(`/notes/${noteId}`, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
  updateNote: (noteId, params) =>
    ApiService.put(`/notes/${noteId}`, { ...params }, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
}

export default NotesService
