// Sector data
const sectorData = {
    retail: {
        title: "Retail Sector",
        description: "AI is transforming retail through personalized recommendations, inventory management, and enhanced customer service.",
        cases: [
            {
                company: "Amazon",
                implementation: "AI-powered recommendation engine and Alexa voice shopping",
                metrics: {
                    "Customer Engagement": "+40%",
                    "Sales Conversion": "+29%",
                    "Implementation Cost": "$150M",
                    "ROI Timeline": "14 months"
                }
            },
            {
                company: "Walmart",
                implementation: "Inventory management AI and automated customer service chatbots",
                metrics: {
                    "Inventory Accuracy": "+95%",
                    "Cost Savings": "$1.2B annually",
                    "Implementation Cost": "$200M",
                    "ROI Timeline": "16 months"
                }
            },
            {
                company: "Target",
                implementation: "Predictive analytics for demand forecasting and personalized marketing",
                metrics: {
                    "Forecast Accuracy": "+87%",
                    "Marketing ROI": "+34%",
                    "Implementation Cost": "$80M",
                    "ROI Timeline": "12 months"
                }
            }
        ]
    },
    hospitality: {
        title: "Hospitality Sector",
        description: "AI enhances guest experiences through personalization, automated reservations, and operational efficiency.",
        cases: [
            {
                company: "Marriott",
                implementation: "AI chatbot for reservations and customer service automation",
                metrics: {
                    "Booking Efficiency": "+55%",
                    "Customer Satisfaction": "+42%",
                    "Implementation Cost": "$50M",
                    "ROI Timeline": "18 months"
                }
            },
            {
                company: "McDonald's",
                implementation: "AI-powered drive-thru ordering and dynamic menu boards",
                metrics: {
                    "Order Accuracy": "+92%",
                    "Service Speed": "+30%",
                    "Implementation Cost": "$300M",
                    "ROI Timeline": "20 months"
                }
            },
            {
                company: "Starbucks",
                implementation: "Personalized recommendations and predictive ordering through mobile app",
                metrics: {
                    "Customer Retention": "+48%",
                    "Average Order Value": "+25%",
                    "Implementation Cost": "$75M",
                    "ROI Timeline": "15 months"
                }
            }
        ]
    },
    financial: {
        title: "Financial Services Sector",
        description: "AI revolutionizes banking through fraud detection, chatbots, and automated advisory services.",
        cases: [
            {
                company: "Bank of America",
                implementation: "Erica virtual assistant for customer service and financial guidance",
                metrics: {
                    "User Adoption": "45M+ users",
                    "Call Center Reduction": "-25%",
                    "Implementation Cost": "$120M",
                    "ROI Timeline": "22 months"
                }
            },
            {
                company: "JPMorgan Chase",
                implementation: "AI-powered fraud detection and risk assessment systems",
                metrics: {
                    "Fraud Prevention": "+60%",
                    "False Positives": "-50%",
                    "Implementation Cost": "$250M",
                    "ROI"ROI Timeline": "24 months"
                }
            },
            {
                company: "PayPal",
                implementation: "Machine learning for transaction monitoring and customer support automation",
                metrics: {
                    "Fraud Detection": "+70%",
                    "Transaction Speed": "+35%",
                    "Implementation Cost": "$180M",
                    "ROI Timeline": "19 months"
                }
            }
        ]
    }
};

// Show sector details
function showSector(sector) {
    const sectorDetails = document.getElementById('sector-details');
    const sectorContent = document.getElementById('sector-content');
    const data = sectorData[sector];
    
    let casesHTML = data.cases.map(caseStudy => {
        let metricsHTML = Object.entries(caseStudy.metrics).map(([key, value]) => 
            `<div class="metric">
                <span>${key}:</span>
                <strong>${value}</strong>
            </div>`
        ).join('');
        
        return `
            <div class="case-card">
                <h4>${caseStudy.company}</h4>
                <p><strong>Implementation:</strong> ${caseStudy.implementation}</p>
                <div style="margin-top: 1rem;">
                    ${metricsHTML}
                </div>
            </div>
        `;
    }).join('');
    
    sectorContent.innerHTML = `
        <h2>${data.title}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">${data.description}</p>
        <h3 style="margin-bottom: 1.5rem;">Case Studies</h3>
        <div class="case-studies">
            ${casesHTML}
        </div>
    `;
    
    sectorDetails.classList.remove('hidden');
    sectorDetails.scrollIntoView({ behavior: 'smooth' });
}

// Hide sector details
function hideSectorDetails() {
    const sectorDetails = document.getElementById('sector-details');
    sectorDetails.classList.add('hidden');
    document.getElementById('sectors').scrollIntoView({ behavior: 'smooth' });
}

// Tab switching
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// ROI Calculator
function calculateROI() {
    const sector = document.getElementById('calc-sector').value;
    const size = document.getElementById('calc-size').value;
    const app = document.getElementById('calc-app').value;
    
    // ROI calculation logic (simplified estimates)
    const costs = {
        small: { chatbot: 50000, analytics: 75000, automation: 100000 },
        medium: { chatbot: 150000, analytics: 250000, automation: 350000 },
        large: { chatbot: 300000, analytics: 500000, automation: 750000 }
    };
    
    const roiMultipliers = {
        retail: { chatbot: 1.4, analytics: 1.8, automation: 2.1 },
        hospitality: { chatbot: 1.3, analytics: 1.6, automation: 1.9 },
        financial: { chatbot: 1.5, analytics: 2.0, automation: 2.3 }
    };
    
    const timeframes = {
        small: { chatbot: 12, analytics: 15, automation: 18 },
        medium: { chatbot: 16, analytics: 20, automation: 24 },
        large: { chatbot: 20, analytics: 24, automation: 30 }
    };
    
    const cost = costs[size][app];
    const roi = Math.round((cost * roiMultipliers[sector][app] - cost));
    const timeframe = timeframes[size][app];
    
    // Display results
    document.getElementById('result-cost').textContent = `$${cost.toLocaleString()}`;
    document.getElementById('result-roi').textContent = `+$${roi.toLocaleString()} (${Math.round((roi/cost)*100)}%)`;
    document.getElementById('result-time').textContent = `${timeframe} months`;
    
    document.getElementById('calc-results').classList.remove('hidden');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});