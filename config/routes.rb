Rails.application.routes.draw do


  get 'users/show'

  mount Ckeditor::Engine => '/ckeditor'


 get 'tags/:tag', to: 'articles#index', as: :tag


  devise_for :users

  root to: 'articles#index'

 # post 'articles/:id/favorite' => 'articles#favorite'
 # get 'articles/:id/favorite' => 'articles#favorite'
 # get 'articles/favorite' => 'articles#favorite'
  resources :articles do
 member do
   post :favorite
   get :subpostnew
 end
 collection do
   get :favorite
   

 end
    resources :comments do
     member { post :vote }
   end

   member { post :vote }
    get :autocomplete_tag_name, :on => :collection

 end



 resources :articles do
 collection do
   post :invite
   get :invite

end

  member do
    post :invite_accepted
    delete :invite_reject
  end

  end

resources :users

  devise_for :users, :controllers => {:sessions => 'devise/sessions'}, :skip => [:sessions] do
    get '/sign_in' => 'devise/sessions#new', :as => :new_user_session
    post '/sign_in' => 'devise/sessions#create', :as => :user_session
    get '/sign_out' => 'devise/sessions#destroy', :as => :destroy_user_session
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
