// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ECommerce {
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        address seller;
        bool available;
    }

    struct Purchase {
        uint256 productId;
        address buyer;
        bool loanRequested;
        bool loanGiven;
        uint256 loanAmount;
    }

    mapping(uint256 => Product) public products;
    mapping(uint256 => Purchase) public purchases;
    uint256 public productIdCounter;
    uint256 public purchaseIdCounter;

    event ProductAdded(uint256 indexed id, string name, uint256 price, address indexed seller);
    event ProductPurchased(uint256 indexed productId, string name, uint256 price, address indexed buyer);
    event LoanRequested(uint256 indexed purchaseId, uint256 amount, address indexed buyer);
    event LoanGiven(uint256 indexed purchaseId, uint256 amount, address indexed buyer, address indexed middleman);
    event ProductDelivered(uint256 indexed purchaseId);

    constructor() {}

    function addProduct(string memory _name, uint256 _price) external {
        require(bytes(_name).length > 0, "Product name cannot be empty");
        require(_price > 0, "Product price must be greater than zero");

        productIdCounter++;
        products[productIdCounter] = Product(productIdCounter, _name, _price, msg.sender, true);
        emit ProductAdded(productIdCounter, _name, _price, msg.sender);
    }

    function purchaseProduct(uint256 _productId) external payable {
        Product storage product = products[_productId];
        require(product.available, "Product not available");
        require(msg.value >= product.price, "Insufficient funds");

        purchaseIdCounter++;
        purchases[purchaseIdCounter] = Purchase(_productId, msg.sender, false, false, 0);
        product.available = false;

        emit ProductPurchased(_productId, product.name, product.price, msg.sender);
    }

    function requestLoan(uint256 _purchaseId, uint256 _amount) external {
        require(_amount > 0, "Loan amount must be greater than zero");
        Purchase storage purchase = purchases[_purchaseId];
        require(msg.sender == purchase.buyer, "Only buyer can request a loan");
        require(!purchase.loanRequested, "Loan already requested");

        purchase.loanRequested = true;
        purchase.loanAmount = _amount;
        emit LoanRequested(_purchaseId, _amount, msg.sender);
    }

    function giveLoan(uint256 _purchaseId) external {
        Purchase storage purchase = purchases[_purchaseId];
        require(purchase.loanRequested, "Loan not requested");
        require(!purchase.loanGiven, "Loan already given");

        // Transfer ether to seller
        Product storage product = products[purchase.productId];
        payable(product.seller).transfer(purchase.loanAmount);
        
        purchase.loanGiven = true;
        emit LoanGiven(_purchaseId, purchase.loanAmount, purchase.buyer, address(this));
    }

    function deliverProduct(uint256 _purchaseId) external {
        Purchase storage purchase = purchases[_purchaseId];
        require(purchase.loanGiven, "Loan not given yet");

        // Transfer ether to seller
        Product storage product = products[purchase.productId];
        payable(product.seller).transfer(product.price);

        emit ProductDelivered(_purchaseId);
    }
}
