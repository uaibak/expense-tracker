from django.urls import path
from .views import ExpenseListCreate, ExpenseDetail, ExpenseSummary

urlpatterns = [
    path('expenses/', ExpenseListCreate.as_view(), name='expense-list-create'),
    path('expenses/<int:pk>/', ExpenseDetail.as_view(), name='expense-detail'),
    path('expenses/summary/', ExpenseSummary.as_view(), name='expense-summary'),
]
