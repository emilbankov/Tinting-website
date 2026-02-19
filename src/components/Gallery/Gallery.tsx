import { useState, useRef, useEffect } from 'react';

export default function Gallery() {
    // Load images from localStorage on component mount
    const [images, setImages] = useState(() => {
        const savedImages = localStorage.getItem('galleryImages');
        if (savedImages) {
            return JSON.parse(savedImages);
        }
        // Default images if nothing is saved
        return [
            {
                id: 1,
                title: 'BMW G20 - Пълно фолиране',
                category: 'Седан',
                imageUrl: '/images/g20.jpeg',
                description: 'Професионално фолиране на всички стъкла'
            },
            {
                id: 2,
                title: 'BMW E92 M3 - Задни стъкла',
                category: 'Купе',
                imageUrl: '/images/e92-m3.jpg',
                description: 'Фолиране само на задни стъкла - 5%'
            },
            {
                id: 3,
                title: 'VW Golf 6 - Задни стъкла',
                category: 'Хечбек',
                imageUrl: '/images/golf-6.jpg',
                description: 'Класическо фолиране на задни стъкла с 35% затъмняване'
            }
        ];
    });

    // Save images to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('galleryImages', JSON.stringify(images));
    }, [images]);

    const [newImage, setNewImage] = useState({
        title: '',
        category: '',
        imageFile: null as File | null,
        description: ''
    });

    const [showAddForm, setShowAddForm] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowAddForm(false);
            }
        };

        if (showAddForm) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showAddForm]);

    const handleAddImage = () => {
        if (newImage.title && newImage.imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Create a data URL that can be stored in localStorage
                const dataUrl = e.target?.result as string;
                
                const imageToAdd = {
                    ...newImage,
                    id: Date.now(), // Use timestamp as unique ID
                    imageUrl: dataUrl, // Store the actual image data
                    imageFile: undefined // Don't store the File object
                };
                
                setImages([...images, imageToAdd]);
                setNewImage({
                    title: '',
                    category: '',
                    imageFile: null,
                    description: ''
                });
                setShowAddForm(false);
            };
            reader.readAsDataURL(newImage.imageFile);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setNewImage({ ...newImage, imageFile: file });
        }
    };

    const handleDeleteImage = (id: number) => {
        setImages(images.filter(img => img.id !== id));
    };

    return (
        <div className="gallery-page">
            <div className="gallery-content">
                <div className="wrapper">
                    {showAddForm && (
                        <div className="add-image-form">
                            <div className="form-card" ref={modalRef}>
                                <button className="modal-close" onClick={() => setShowAddForm(false)}>
                                    <i className="fa-solid fa-times"></i>
                                </button>
                                <h3>Добави нов проект</h3>
                                <div className="form-group">
                                    <label>Заглавие на проекта</label>
                                    <input
                                        type="text"
                                        value={newImage.title}
                                        onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                                        placeholder="напр. BMW G20 - Пълно фолиране"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Категория</label>
                                    <select
                                        value={newImage.category}
                                        onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                                    >
                                        <option value="">Избери категория</option>
                                        <option value="Седан">Седан</option>
                                        <option value="Купе">Купе</option>
                                        <option value="Хечбек">Хечбек</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Спортен">Спортен</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Изображение от компютър</label>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileSelect}
                                        accept="image/*"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Описание</label>
                                    <textarea
                                        value={newImage.description}
                                        onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
                                        placeholder="Опишете типа фолио и проценти на затъмняване..."
                                        rows={3}
                                    />
                                </div>
                                <div className="form-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleAddImage}
                                    >
                                        <i className="fa-solid fa-check"></i>
                                        Добави
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowAddForm(false)}
                                    >
                                        <i className="fa-solid fa-times"></i>
                                        Отказ
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="gallery-grid">
                        {/* Empty card with + */}
                        <div className="gallery-item">
                            <div className="image-card" onClick={() => setShowAddForm(true)}>
                                <div className="image-placeholder">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <div className="image-info">
                                    <h3>Добави нов проект</h3>
                                    <span className="category">Нов</span>
                                    <p>Кликни тук за да добавите нов проект</p>
                                </div>
                            </div>
                        </div>

                        {images.map((image) => (
                            <div key={image.id} className="gallery-item">
                                <div className="image-card">
                                    {image.imageUrl ? (
                                        <>
                                            <div className="image-display">
                                                <img src={image.imageUrl} alt={image.title} />
                                            </div>
                                            <div className="image-info">
                                                <h3>{image.title}</h3>
                                                <span className="category">{image.category}</span>
                                                <p>{image.description}</p>
                                            </div>
                                            <div className="image-actions">
                                                <button className="btn-edit">
                                                    <i className="fa-solid fa-edit"></i>
                                                </button>
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => handleDeleteImage(image.id)}
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="image-placeholder">
                                                <i className="fa-solid fa-plus"></i>
                                            </div>
                                            <div className="image-info">
                                                <h3>{image.title}</h3>
                                                <span className="category">{image.category}</span>
                                                <p>{image.description}</p>
                                            </div>
                                            <div className="image-actions">
                                                <button className="btn-edit">
                                                    <i className="fa-solid fa-edit"></i>
                                                </button>
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => handleDeleteImage(image.id)}
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}