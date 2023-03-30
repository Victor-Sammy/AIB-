import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import Heart from '../vectors/Heart'
import { getUserLikedItems } from '../../Api/user.js'
import './style.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { toggleItemLike } from '../../Api/products'
import { useAuth } from '../../context/AuthContext'

export default function ItemCard({ item }) {
  const { user } = useAuth()
  let location = useLocation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: likedItems } = useQuery({
    queryKey: ['userLikedItems'],
    queryFn: getUserLikedItems,
  })

  // Mutations
  const { mutate: toggleLike } = useMutation({
    mutationFn: ({ id, add }) => toggleItemLike(id),
    onMutate: ({ id, add }) => {
      // Snapshot the previous value
      const previousLikedItems = queryClient.getQueryData(['userLikedItems'])

      let likedItems = [...previousLikedItems]

      if (add) {
        likedItems.push(item)
      } else {
        likedItems = likedItems.filter((likedItem) => likedItem.id !== item.id)
      }

      // Optimistically update to the new value
      queryClient.setQueryData(['userLikedItems'], likedItems)

      return { previousLikedItems }
    },
    onSuccess: (data, variables, context) => {
      toast.success(
        `${item.name} successfully ${
          variables.add ? 'added to' : 'removed from'
        } favourites`
      )
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['userLikedItems'], context.previousLikedItems)
      toast.error(
        `Error ${
          variables.add
            ? `adding ${item.name} to`
            : `removing ${item.name} from`
        } favourites`
      )
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['userLikedItems'] })
    },
  })

  const toggleLikeHelper = (e, args) => {
    e.stopPropagation()

    if (user) {
      toggleLike(args)
    } else {
      toast.error('Login to add items to your wishlist')
      navigate(`/signin?next=${location.pathname}`)
    }
  }

  return (
    <div className='productItem'>
      <div className='productItem-heart'>
        {likedItems?.some((likedItem) => likedItem.id === item.id) ? (
          <Heart
            fill='#EB5757'
            stroke='#EB5757'
            onClick={(e) => toggleLikeHelper(e, { id: item.id, add: false })}
          />
        ) : (
          <Heart
            onClick={(e) => toggleLikeHelper(e, { id: item.id, add: true })}
          />
        )}
      </div>
      <Link to={`/products/${item.id}`} className='productItem-linkWrap'>
        <div className='productItem-image'>
          <img src={item.images[0]?.image} alt={`${item.name}`} />
        </div>
        <div className='productItem-content'>
          <div className='productItem-content-category'>
            {item.category ?? 'Bliss Fashion'}
          </div>
          <div className='productItem-content-name'>{item.name}</div>
          <div className='productItem-content-price'>
            NGN {item.price.toLocaleString()}
          </div>
          <div className='productItem-content-rating'>
            <span className='stars'>⭐⭐⭐⭐⭐</span>
            <span className='rating'>5.0</span>
            <span className='ratingCount'>(34k)</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
