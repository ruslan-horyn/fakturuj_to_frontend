import { renderHook } from '@testing-library/react';
import { useProductModel } from "../useProductModel";

const mockUnwrap = jest.fn();
const mockUseAppDispatch = jest.fn();
const mockUseAppSelector = jest.fn();
const mockGetAllProductsAction = jest.fn();
const mockDeleteProductAction = jest.fn();

jest.mock("../../hooks/useAppDispatch", () => ({
  useAppDispatch: () => mockUseAppDispatch,
}));

jest.mock("../../hooks/useAppSelector", () => ({
  useAppSelector: jest.fn().mockImplementation(() => mockUseAppSelector),
}));

jest.mock("../../store/products/actions", () => ({
  getAllProductsAction: jest.fn().mockImplementation((...args) => mockGetAllProductsAction(...args)),
  deleteProductAction: jest.fn().mockImplementation((...args) => mockDeleteProductAction(...args)),
}));

describe("useProductModel", () => {

  let hookResult: ReturnType<typeof useProductModel>;

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseAppDispatch.mockImplementationOnce((cb) => cb);
    mockGetAllProductsAction.mockReturnValueOnce({ unwrap: mockUnwrap });
    mockDeleteProductAction.mockReturnValueOnce({ unwrap: mockUnwrap });
    hookResult = renderHook(() => useProductModel()).result.current;
  });

  it("should call getAllProductsAction", async () => {
    const { getAllProducts } = hookResult;

    await getAllProducts();

    expect(mockGetAllProductsAction).toHaveBeenCalledTimes(1);
    expect(mockUnwrap).toHaveBeenCalledTimes(1);
  });
  it("should call deleteProduct", async () => {
    const { deleteProduct } = hookResult;

    await deleteProduct('1');

    expect(mockDeleteProductAction).toHaveBeenCalledTimes(1);
    expect(mockDeleteProductAction).toHaveBeenCalledWith('1');
    expect(mockUnwrap).toHaveBeenCalledTimes(1);
  });
});