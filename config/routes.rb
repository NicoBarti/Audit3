Rails.application.routes.draw do
  resources :audits
  resources :profiles
  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :usuarios
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
