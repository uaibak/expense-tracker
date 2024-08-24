from rest_framework import generics
from expenses.models import Expense
from expenses.serializers import ExpenseSerializer
from rest_framework.response import Response
from rest_framework.exceptions import APIException
from rest_framework.views import APIView


class ExpenseSummary(APIView):
    def get(self, request, *args, **kwargs):
        try:
            expenses = Expense.objects.all()
            total = sum(expense.amount for expense in expenses)
            by_category = {}
            for expense in expenses:
                if expense.category in by_category:
                    by_category[expense.category] += expense.amount
                else:
                    by_category[expense.category] = expense.amount
            return Response({
                'total': total,
                'byCategory': by_category
            })
        except Exception as e:
            raise APIException(f"An error occurred: {str(e)}")


class ExpenseListCreate(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class ExpenseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class ExpenseSummary(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        expenses = Expense.objects.all()
        total = sum(expense.amount for expense in expenses)
        by_category = {}
        for expense in expenses:
            if expense.category in by_category:
                by_category[expense.category] += expense.amount
            else:
                by_category[expense.category] = expense.amount
        return Response({
            'total': total,
            'byCategory': by_category
        })
