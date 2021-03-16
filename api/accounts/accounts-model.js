const db = require('../../data/db-config')

// get /api/accounts
const getAll = () => {
  return db('accounts')
}

// get /api/accounts:id
const getById = id => {
  return db('accounts').where('id', id).first()
}

// post /api/accounts
const create = async account => {
  const [id] = await db('accounts').insert(account, ['name', 'budget'])
  return getById(id)
}

// put /api/accounts:id
const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

// delete /api/accounts:id
const deleteById = async id => {
  const toBeChopped = await getById(id)
  await db('accounts').where({ id }).del()
  return toBeChopped
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
